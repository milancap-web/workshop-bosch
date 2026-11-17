export default async (req, context) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const data = await req.json()

    console.log('Workshop data received:', {
      user: data.user?.name,
      module: data.module,
      timestamp: data.timestamp,
    })

    // Data se uloží v lokálním storage na straně klienta
    // Pro produkci by bylo lepší použít databázi (Supabase, Firebase, atd.)

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Data uložena',
        data: { module: data.module, user: data.user?.name },
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: 'Server error', details: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
}
