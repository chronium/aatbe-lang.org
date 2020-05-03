# Logic

## Branching

For branching, there is support for an if/else statement pair.

```aat
if <ret> cond <then> then_expr else else_expr
```

Examples

```aat
if true {
  // do something
} else {
  // do something else
}

if a == b then
  // do something
else
  // do something else

if ret foo.cond {
  ret "foo"
} else {
  ret "bar"
}

if a == b {
  // then
} else if foo {
  // otherwise
} else {
  // fallback
}
```

A particularity of Åtbe is the `if ret` syntax. The syntax is used to turn `if/else` statements into expressions. Similar to the `?` (ternary) operator in other languages, or if/else statement pairs in Rust and Scala.

For `if ret`, the last statement in the body of both the `then` block and `else` block needs to have the same type as it will be used as a return value from either of the branches.

## Loops

There are currently two types of loops available, `while` and `until` loops.

```aat
while/until cond expr
```

Usage

```aat
while true {
  // The while loop continues execution while the condition is true
}

until false {
  // The until loop continues execution until the condition is true
}
```

The two type of loops are basically opposites. For example, if your condition is `while a != b` it can be rewritten as `until a == b`.
