# First Class Citizens

First class citizens are top level file structures, all support type parameters.

## Functions

```aat
// format
<exp> <extern> fn snake_case param1: type1, param2: type2 (-> ReturnType) = <expr body>

// examples

fn foo () = { }
fn bar baz: i32 -> bool = { }

exp fn export_process param1: Type1, truth: bool -> ProcessedType2 = { }

extern fn fopen stream: FILE* -> i32
```

### Modifiers

#### Export

To export a function from a file, the `exp` keyword is used somewhere in the function declaration, before the `fn` keyword.

#### External

To bind a function to an externally linked one, you use the `extern` keyword. External functions **must not** have a function body.

## Imports

For importing files, the syntax is `use "path"`, with either a relative path or absolute path for resolved external dependencies (currently only aatbe's stdlib is supported).

```aat
use "relative/path/to/file" // imports ./relative/path/to/file.aat
use "fmt/print"             // imports stdlib/fmt/print.aat
use "math/vec3"
use "prelude"               // imports stdlib/prelude.aat
```

#### Example

```
project/
├── main.aat
├── top.aat
└── module
    ├── foo.aat
    └── bar.aat
```

```aat
// main.aat

use "module/foo" // imports project/module/foo.aat
use "top"        // imports project/top.aat
```

```aat
// foo.aat

use "bar"        // imports project/module/bar.aat
use "../top.aat" // imports project/top.aat
```

## Records

Analogue to C like structures.

```aat
rec Name(first: str, last: str)
```

### Usage and initialization

```aat
// given the previous definition for Name

fn new :Name, first_val: str, last_val: str -> Name
  = Name {
    first: first_val,
    last: last_val,
  }

fn example () = {
  val name_a = Name {
    first: "John",
    last: "Jim",
  }

  val name_b = new :Name, "Jane", "Doe"
}
```

## Typedefs

### Newtype pattern

Newtype is a way to isolate values of a certain type, with a new name. Example definition and usage:

```aat
type Age = u8
type Name = str

fn example () = {
  val age = Age 18u8
  val name = Name "Jack"

  *age  // accesses the value of age (u8)
  *name // accesses the value of name (str)
}
```

### Variant types

```aat
type Variant
  = CaseA str, bool
  | CaseB i32, str
  | CaseC bool

fn example () = {
  val caseA = CaseA "foo", true
  val caseC = CaseC false

  // Both caseA and caseC have the same parent type of `Variant
  // But they have a different variant type which can be matched on

  caseA.1 // access the str (first) field
  caseA.2 // access the bool (second) field
}
```

### Misc Typedefs

```aat
type union = u8 | u16 | i32 // pretty much UB, works in the language, no idea why
type Opaque // used to forward define an opaque type
```
