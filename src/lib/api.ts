type Row = { id: string; name: string; email: string; status: 'Active' | 'Pending' | 'Overdue'; amount: number };

const makeSample = (n: number) => Array.from({ length: n }).map((_, i) => ({
  id: String(i + 1),
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  status: i % 3 === 0 ? 'Overdue' : i % 2 === 0 ? 'Pending' : 'Active',
  amount: Math.round(50 + i * 7 + Math.random()*200)
}));

const SAMPLE = makeSample(200);

export async function fetchUsers({ page = 1, pageSize = 10, query = '' }: { page?: number; pageSize?: number; query?: string }) {
  // simulate network
  await new Promise(res => setTimeout(res, 150));
  let data = SAMPLE.filter(r => r.name.toLowerCase().includes(query.toLowerCase()) || r.email.toLowerCase().includes(query.toLowerCase()));
  const total = data.length;
  data = data.slice((page-1)*pageSize, page*pageSize);
  return { data, total } as { data: Row[]; total: number };
}

export async function fetchChartData() {
  await new Promise(res => setTimeout(res, 80));
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const data = months.map((m,i) => ({ month: m, revenue: Math.round(20000 + Math.sin(i/2)*4000 + i*800) }));
  return data;
}
