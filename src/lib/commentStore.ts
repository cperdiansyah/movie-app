interface Comment {
  id: number
  movieId: number
  content: string
  createdAt: Date
}

class CommentStore {
  private comments: Comment[] = []
  private nextId = 1

  addComment(movieId: number, content: string): Comment {
    const comment: Comment = {
      id: this.nextId++,
      movieId,
      content,
      createdAt: new Date(),
    }
    this.comments.push(comment)
    return comment
  }

  getComments(movieId: number): Comment[] {
    return this.comments.filter((comment) => comment.movieId === movieId)
  }

  updateComment(id: number, content: string): Comment | null {
    const comment = this.comments.find((c) => c.id === id)
    if (comment) {
      comment.content = content
      return comment
    }
    return null
  }

  deleteComment(id: number): boolean {
    const index = this.comments.findIndex((c) => c.id === id)
    if (index !== -1) {
      this.comments.splice(index, 1)
      return true
    }
    return false
  }
}

export const commentStore = new CommentStore()
