use worker::*;

fn hello_world() -> std::string::String {
    let hello ="Hello, World!".to_string();
    hello
}

#[event(fetch)]
async fn main(req: Request, env: Env, ctx: Context) -> Result<Response> {
    let res = hello_world();
    Response::ok(res)
}

#[cfg(test)]
mod tests {

    use super::*;

    #[test]
    fn test_hello_world() {
        let hello = hello_world();
        assert_eq!(hello, "Hello, World!");
    }
}