import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
  number: number
  isCurrent?: boolean
}

export function PaginationItem({
  number,
  isCurrent = false
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size='sm'
        color='white'
        disabled
        _disabled={{ bg: 'yellow.400', cursor: 'default' }}
        _hover={{
          filter: 'brightness(120%)'
        }}
      >
        {number}
      </Button>
    )
  }

  return (
    <Button
      size='sm'
      bg='gray.300'
      color='white'
      _hover={{
        filter: 'brightness(120%)'
      }}
    >
      {number}
    </Button>
  )
}
