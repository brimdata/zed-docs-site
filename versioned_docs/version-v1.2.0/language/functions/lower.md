### Function

&emsp; **lower** &mdash; convert a string to lower case

### Synopsis

```
lower(s: string) -> string
```
### Description

The _lower_ function converts all upper case Unicode characters in `s`
to lower case and returns the result.

### Examples

```mdtest-command
echo '"Zed"' | zq -z 'yield lower(this)' -
```
=>
```mdtest-output
"zed"
```
