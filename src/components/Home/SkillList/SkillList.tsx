/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'
import { Skill, UserProfile } from '../../../services/models/users'

const header = css`
  margin-top: 15px;
`

interface SkillListProps {
  userProfile?: UserProfile
}

const SkillList: FC<SkillListProps> = ({ userProfile = null }) => (
  <div className="ui container">
    <div className="content" css={header}>
      <h3 className="ui header">Skill List</h3>
    </div>
    <hr />
    <table className="ui striped table">
      <thead>
        <tr>
          <th>Skill</th>
          <th>Level</th>
          <th>Group</th>
          <th>Ranking</th>
        </tr>
      </thead>
      <tbody>
        {userProfile.skills.map((s: Skill) => (
          <tr key={s.tag}>
            <td>{s.tag}</td>
            <td>
              {s.point < 30
                ? 'C'
                : s.point < 50
                ? 'B'
                : s.point < 100
                ? 'A'
                : s.point < 150
                ? 'S'
                : null}
            </td>
            <td>〇〇</td>
            <td>186/13566</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default SkillList