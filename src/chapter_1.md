# Chapter 1

```aat
use "io/fio"
use "prelude"

rec Sphere(center: Point, radius: f64, color: Color, albedo: f32)
rec Plane(center: Point, normal: Vec3, color: Color, albedo: f32)

@entry
fn main argc: i32, argv: str* = {
    if argc != 2 {
        println "Please provide a file to cat"
        exit -1
    }
    var file = fopen argv[1] as str, "r"

    if file as u64 == 0u64 {
        printf "Could not open file %s\n", argv[1]
        exit -1
    }

    var eof = false
    var c: char

    while eof != true {
        c = fgetc file

        if c == EOF then
            eof = true
        else print c
    }

    fclose file
}

exp fn clamp self: Color -> Color =
    Color {
        red: (max (min self.red, 1.0), 0.0),
        green: (max (min self.green, 1.0), 0.0),
        blue: (max (min self.blue, 1.0), 0.0)
    }

fn print color: Color = printf "%d %d %d\n", (color.red * 255.0) as u8, (color.green * 255.0) as u8, (color.blue * 255.0) as u8

fn get_color sphere: Sphere, light: Light, ray: Ray, dist: f64 -> Color = {
    val hit_point = add (to_vec3 ray.origin), mul ray.direction, dist
    val normal = normal sphere, hit_point
    val dir_to_light = mul light.direction, -1f64
    val light_pow = (max (dot normal, dir_to_light) as f32, 0.0) * light.intensity as f32
    val light_refl = sphere.albedo / PI as f32

    val color = mul (mul (mul sphere.color, light.color), light_pow), light_refl

    clamp color
}

```
