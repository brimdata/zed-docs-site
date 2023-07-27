### Operator

&emsp; **get** &mdash; source data from a URI

### Synopsis

`get` is a shorthand notation for `from`. See the [from operator](from.md) documentation for details.

### Examples

You can pass authorization information to `get`. Here's an example using basic auth

```
get https://domain.com?param=example format line headers {Authorization: [\"Basic: ENCODED\"]}
```
