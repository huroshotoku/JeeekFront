import React from 'react'
import { storiesOf } from '@storybook/react'
import Home from '../../components/Home'
import { SkillState } from '../../reducers/skillStack'
import 'semantic-ui-css/semantic.min.css'

export const skillData: SkillState[] = [
  { tag: 'React', point: 60, updateAt: null },
  { tag: 'Next', point: 30, updateAt: null },
]

storiesOf('Home', module).add('Home', () => <Home skillStack={skillData} />)
