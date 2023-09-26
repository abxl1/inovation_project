import { useQueryClient, useMutation } from "react-query"
import instance from "../axios/api"

const addPostComment = async ({ id, content }) => {
    let res = await instance.post(`/api/comments/posts/${id}`, { content })
    console.log("res",res)
}

export const usePostComment = () =>{
    const queryClient = useQueryClient();
    const postCommentmutation = useMutation(addPostComment , {
        onSuccess: () => {
            queryClient.invalidateQueries('detailposts')
            console.log("통신성공")
        },
        onError: (error) => {
            console.log("error", error)
        }
    })
    return postCommentmutation
}