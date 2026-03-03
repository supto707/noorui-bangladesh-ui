import React, { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { useNavigate } from 'react-router-dom';

const commands = [
  { id: 'home', name: 'Home', path: '/' },
  { id: 'dashboard', name: 'Dashboard', path: '/dashboard' },
  { id: 'components', name: 'Components', path: '/components' },
  { id: 'documentation', name: 'Documentation', path: '/documentation' },
];

export const CommandPalette: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen(v => !v);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener('keydown', onKey);
    window.addEventListener('open-command-palette', onOpen as EventListener);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('open-command-palette', onOpen as EventListener);
    };
  }, []);

  useEffect(() => {
    if (!open) setQ('');
  }, [open]);

  const filtered = commands.filter(c => c.name.toLowerCase().includes(q.toLowerCase()));

  const onSelect = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-24">
      <div className="w-full max-w-xl px-4">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl">
          <Command value={q} onValueChange={setQ} className="p-3">
            <Command.Input className="w-full bg-transparent outline-none text-lg" placeholder="Type a command or search..." />
            <Command.List>
              {filtered.length === 0 && <div className="p-3 text-sm text-slate-500">No results</div>}
              {filtered.map(c => (
                <Command.Item key={c.id} onSelect={() => onSelect(c.path)} className="px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer">
                  {c.name}
                </Command.Item>
              ))}
            </Command.List>
          </Command>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
