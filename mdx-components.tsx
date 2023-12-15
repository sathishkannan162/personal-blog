import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-[50px]">{children}</h1>,
    img: (props) => (
      // @ts-expect-error src incompatibly typed
      // eslint-disable-next-line jsx-a11y/alt-text
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        // width={100}
        // height={100}
        {...props}
      />
    ),
    ...components,
  };
}
