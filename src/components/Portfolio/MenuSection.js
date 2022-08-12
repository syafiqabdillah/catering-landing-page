import React from 'react'
import styled from 'styled-components'
import { BiCube } from 'react-icons/bi'
import { FiFeather, FiCommand, FiThumbsUp } from 'react-icons/fi'

const MenuWrapper = styled.div`
  padding: 20px;
  max-width: 500px;
  flex: 2;
  display: flex;
  align-items: center;
`

const MenuList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`

const MenuItemWrapper = styled.div`
  background-color: var(--maroon);
  min-height: 200px;
  width: 200px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;

  @media (max-width: 1000px) {
    width: 170px;
  }
`

const Heading = styled.h3`
  color: var(--accent-maroon);
  font-size: 20px;
  margin-top: 10px;
`

const Icon = styled.div`
  & > * {
    width: 40px;
    height: 40px;
    color: var(--light-maroon);
  }
`

const P = styled.p`
  color: var(--light-maroon);
  margin-top: 10px;
`

function MenuItem({ title, description, children }) {
  return (
    <MenuItemWrapper>
      <Icon>{children}</Icon>
      <Heading>{title}</Heading>
      <P className="notes">{description}</P>
    </MenuItemWrapper>
  )
}

function MenuSection() {
  return (
    <MenuWrapper>
      <MenuList>
        <MenuItem
          title="Design"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, quidem!"
        >
          <BiCube />
        </MenuItem>
        <MenuItem
          title="Develop"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, quidem!"
        >
          <FiCommand />
        </MenuItem>
        <MenuItem
          title="Write"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, quidem!"
        >
          <FiFeather />
        </MenuItem>
        <MenuItem
          title="Promote"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, quidem!"
        >
          <FiThumbsUp />
        </MenuItem>
      </MenuList>
    </MenuWrapper>
  )
}

export default MenuSection
