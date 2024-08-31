import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";

export default function page() {
  return (
   <Layout>
        <h1 className="text-5xl mb-4 text-gray-400">  Saved  posts</h1>
        <PostCard/>
        <PostCard/>
   </Layout>
  )
}
