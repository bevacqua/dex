# dex

> Translate data from **base<sub>`a`</sub>** into **base<sub>`n`</sub>** and back

# Install

From `npm`

```shell
npm install --save dex
```

# `dex.hex(input)`

Returns `input` converted into **base<sub>16</sub>** representation. Assumes `input` is a **base<sub>10</sub>** string, or a `Number`.

# `dex.dec(input)`

Returns `input` converted into **base<sub>10</sub>** representation. Assumes `input` is a **base<sub>16</sub>** string.

# `dex(input, from, to)`

Returns `input` converted into **base<sub>`to`</sub>** representation. Assumes `input` is a **base<sub>`from`</sub>** string.

# Notes

- `dex` accepts only non-empty strings and numeric `input`s, every other `input` value will result in `null` being returned
- `input` gets lowercased by `dex`, so you don't need to
- Result is always a lowercase string representation of the number in the requested notation

# CLI

```shell
dex <input> [from] [to]
```

Prints to standard output the results of doing `dex(input, from=16, to=10)`.

# License

MIT
