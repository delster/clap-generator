import React, { useState } from "react"
import styled from "styled-components"

const StyledTextarea = styled.textarea`
  margin: 0.5em;
  padding: 1em;
  border-radius: 8px;
  border: none;
  box-shadow: 0px 2px 4px -2px rgba(0, 0, 0, 0.4);
`
const EmojiRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const EmojiRowLabel = styled.p`
  margin-bottom: 0;
  text-align: center;
`
const EmojiButton = styled.button`
  font-size: 1.5rem;
  margin: .25em;
`

const Generator = () => {
  const [text, setText] = useState("")
  const [emoji, setEmoji] = useState("👏")

  const clapify = text => text.split(" ").join(` ${emoji} `)
  const changeEmoji = emoji => setEmoji(emoji)

  const handleInput = e => setText(clapify(e.target.value))
  const handleClick = e => setEmoji(e.target.innerText)

  return (
    <>
      <StyledTextarea
        rows="8"
        cols="40"
        onChange={handleInput}
        placeholder="Type here"
      />
      <StyledTextarea
        rows="8"
        cols="40"
        value={text}
        placeholder="Claps 👏 show 👏 here"
      />
      <EmojiRowLabel>Click a button and start typing to change the skin tone.</EmojiRowLabel>
      <EmojiRow>
        <EmojiButton onClick={handleClick}>👏</EmojiButton>
        <EmojiButton onClick={handleClick}>👏🏻</EmojiButton>
        <EmojiButton onClick={handleClick}>👏🏼</EmojiButton>
        <EmojiButton onClick={handleClick}>👏🏽</EmojiButton>
        <EmojiButton onClick={handleClick}>👏🏾</EmojiButton>
        <EmojiButton onClick={handleClick}>👏🏿</EmojiButton>
      </EmojiRow>
    </>
  )
}

export default Generator
