import { getPopularMovies } from '@/lib/tmdb'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page') || '1'

  try {
    const movies = await getPopularMovies(Number.parseInt(page))
    return NextResponse.json(movies)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch popular movies' },
      { status: 500 },
    )
  }
}
