import { searchMovies } from '@/lib/tmdb'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query')
  const page = searchParams.get('page') || '1'

  if (!query) {
    return NextResponse.json(
      { error: 'Query parameter is required' },
      { status: 400 },
    )
  }

  try {
    const results = await searchMovies(query, Number.parseInt(page))
    return NextResponse.json(results)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to search movies' },
      { status: 500 },
    )
  }
}
