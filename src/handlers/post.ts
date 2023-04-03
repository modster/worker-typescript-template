import Store from "../posts_store";

interface PostRequest{
    params: {
        id: number;
    };
}

async function Post(request: PostRequest) {
    const posts = new Store();
    const postId = request.params.id;

    const body = JSON.stringify(await posts.find(postId));
    const headers = { "Content-type": "application/json" };
    return new Response(body, { headers });
}

export default Post;
