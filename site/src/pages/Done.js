import React from 'react'
import SmallDisplay from '../components/SmallDisplay'
import BigDisplay from '../components/BigDisplay'
import Content from '../components/Content'
import TextField from '../components/TextField'
import RoundedBox from '../components/RoundedBox'

export default () =>
    <>
        <BigDisplay className="bg-pink"
            title="What’s next"
            subTitle="Find the steps to complete your setup below."
        />
        <SmallDisplay text="Your application is being reviewed by our team. We will get back to you as soon as possible." />
        <Content>
            <RoundedBox />
        </Content>
    </>