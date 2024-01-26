export function Admin(){
    function createNewPost(evt){
        fetch('http://localhost:3000/posts',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                "title":evt.target.title,
                "body":evt.target.body
            })
        })

    }
    return (
        <>
            <h1>
                Admin
            </h1>
            <form onSubmit={createNewPost}>
                <input name="title" type="text" placeholder={'post time'}/>
                <textarea name="body" placeholder={'post content'}/>
                <button type="submit">create post</button>
            </form>
        </>
    )
}