### Operator

&emsp; **combine** &mdash; combine parallel paths into a single output

### Synopsis

```
( => ... => ...) | ...
```
### Description

The implied `combine` operator merges inputs from multiple upstream legs of
the dataflow path into a single output.  The order of values in the combined
output is undefined.

You need not explicit reference the operator with any text.  Instead, the
mere existence of a merge point in the flow graph implies its existence
and its semantics of undefined merge order.

### Examples

_Copy input to two paths and combine with the implied operator_
```mdtest-command
echo '1 2' | zq -z 'fork (=>pass =>pass) | sort this' -
```
=>
```mdtest-output
1
1
2
2
```
