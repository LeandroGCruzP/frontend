import { useColorMode } from '@chakra-ui/react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement, ReactElement } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  shouldMatchExactHref?: boolean
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const { colorMode } = useColorMode()
  const { asPath } = useRouter()

  let isActive = false

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true
  }
  if (
    !shouldMatchExactHref
    && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color:
          colorMode === 'light'
            ? (
              isActive
                ? 'yellow.300'
                : 'white'
            )
            : (
              isActive
                ? 'yellow.400'
                : 'white'
            )
      })}
    </Link>
  )
}
