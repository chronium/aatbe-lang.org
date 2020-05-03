# Literals

There are a few main literals for aatbe.

## Numeric

### Integer

```aat
0
123
987
```

### Hex

```aat
0x123
0xcafe
0xbeef
```

### Floating

```aat
1.23
123.789
```

For integer numeric and floating point literals a suffix can be added to specify the value type

```aat
255u8        // unsigned 8 bit number
123456789u64 // unsigned 64 bit number
-128i16      // signed 16 bit number

32f32        // 32 bit floating point number
1.768f64     // 64 bit floating point number
```

## Strings and characters

```aat
"Hello World!\n" // Simple escape sequences are supported
'a' // character literal `a`
```

## Other

### Booleans

```aat
true
false
```

### Symbols

Format: Identifier separated by `_` underscore with `:` prefix. Example:

```aat
:Symbol
:Foo
:Bar_Baz
```

### Unit value

Equivalent to void/null in other languages, but itself is a value.

```aat
()
```
