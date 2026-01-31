import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: 'Pars Protocol',
      }}
      links={[
        {
          text: 'Governance',
          url: 'https://pars.vote',
          external: true,
        },
        {
          text: 'Contracts',
          url: 'https://github.com/parsdao/contracts',
          external: true,
        },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
