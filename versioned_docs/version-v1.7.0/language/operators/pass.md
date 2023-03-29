### Operator

&emsp; **pass** &mdash; copy input values to output

### Synopsis

```
pass
```
### Description

The `pass` operator outputs a copy of each input value. It is typically used
with operators that handle multiple legs of the dataflow path such as
[`fork`](fork.md) and [`join`](join.md).

### Examples

_Copy input to output_
```mdtest-command
echo '1 2 3' | zq -z pass -
```
=>
```mdtest-output
1
2
3
```
