type ComponentProps ={
  posts: object[],
}

const Component = (props: ComponentProps) => {
  const { posts } = props

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          {post.title}
          {post.body}
        </div>
      ))}
    </div>
  )
}

export default Component