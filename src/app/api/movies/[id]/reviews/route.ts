import { getMovieReviews } from '@/lib/tmdb'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page') || '1'
  const movieId = Number.parseInt(params.id)

  try {
    const reviews = await getMovieReviews(movieId, Number.parseInt(page))
    return NextResponse.json(reviews)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch movie reviews' },
      { status: 500 },
    )
  }
}
