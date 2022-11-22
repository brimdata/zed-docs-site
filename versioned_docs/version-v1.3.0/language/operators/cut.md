### Operator

&emsp; **cut** &mdash; extract subsets of record fields into new records

### Synopsis

```
cut <field>[:=<expr>] [, <field>[:=<expr>] ...]
```
### Description

The `cut` operator extracts values from each input record in the
form of one or more [field assignments](../overview.md#25-field-assignments),
creating one field for each expression.  Unlike the `put` operator,
which adds or modifies the fields of a record, `cut` retains only the
fields enumerated, much like a SQL projection.

Each `<field>` expression must be a field reference expressed as a dotted path or sequence of
constant index operations on `this`, e.g., `a.b` or `a["b"]`.

Each right-hand side `<expr>` can be any Zed expression and is optional.

When the right-hand side expressions are omitted,
the _cut_ operation resembles the Unix shell command, e.g.,
```
... | cut a,c | ...
```
If an expression results in `error("quiet")`, the corresponding field is omitted
from the output.  This allows you to wrap expressions in a `quiet()` function
to filter out missing errors.

If an input value to cut is not a record, then the cut still operates as defined
resulting in `error("missing")` for expressions that reference fields of `this`.

Note that when the field references are all top level,
`cut` is a special case of a yield with a
[record literal](../overview.md#6112-record-expressions) having the form:
```
yield {<field>:<expr> [, <field>:<expr>...]}
```

### Examples

_A simple Unix-like cut_
```mdtest-command
echo '{a:1,b:2,c:3}' | zq -z 'cut a,c' -
```
=>
```mdtest-output
{a:1,c:3}
```
_Missing fields show up as missing errors_
```mdtest-command
echo '{a:1,b:2,c:3}' | zq -z 'cut a,d' -
```
=>
```mdtest-output
{a:1,d:error("missing")}
```
_The missing fields can be ignored with quiet_
```mdtest-command
echo '{a:1,b:2,c:3}' | zq -z 'cut a:=quiet(a),d:=quiet(d)' -
```
=>
```mdtest-output
{a:1}
```
_Non-record values generate missing errors for fields not present in a non-record `this`_
```mdtest-command
echo '1 {a:1,b:2,c:3}' | zq -z 'cut a,b' -
```
=>
```mdtest-output
{a:error("missing"),b:error("missing")}
{a:1,b:2}
```
