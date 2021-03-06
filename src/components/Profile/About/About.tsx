/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'
import { CareerState, Institution } from '../../../reducers/career'

const headerBackgroundStyle = css`
  width: 100%;
`

interface AboutProps {
  uid: string
  career?: CareerState
  isEditMode?: boolean
  editStart?: (param?: string) => void
}

const About: FC<AboutProps> = ({
  uid = null,
  career = null,
  isEditMode = false,
  editStart = () => {},
}) => (
  <div className="content">
    <h2 className="ui left floated header" style={{ marginLeft: '10px', marginTop: '10px' }}>
      About
    </h2>
    <button
      className="mini ui button"
      type="button"
      onClick={() => editStart(uid)}
      style={{ marginLeft: '10px', marginTop: '10px' }}
    >
      編集
    </button>
    <div className="content">
      <h3
        className="ui dividing teal header"
        style={{ marginLeft: '10px', marginTop: '30px' }}
        css={headerBackgroundStyle}
      >
        学歴
      </h3>
      <div className="content">
        {isEditMode ? (
          <textarea> </textarea>
        ) : (
          <div className="description" style={{ marginLeft: '30px' }}>
            {career.education.map((inst: Institution) => (
              <ul key={inst.subject} style={{ clear: 'both' }}>
                <li style={{ float: 'left', width: '10%' }}>{inst.period}</li>
                <li style={{ listStyle: 'none' }}>{inst.subject}</li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
    <div className="content">
      <h3
        className="ui dividing teal header"
        style={{ marginLeft: '10px', marginTop: '15px' }}
        css={headerBackgroundStyle}
      >
        職歴
      </h3>
      <div className="content">
        {isEditMode ? (
          <textarea> </textarea>
        ) : (
          <div className="description" style={{ marginLeft: '30px' }}>
            {career.workExperience.map((inst: Institution) => (
              <ul key={inst.subject} style={{ clear: 'both' }}>
                <li style={{ float: 'left', width: '10%' }}>{inst.period}</li>
                <li style={{ listStyle: 'none' }}>{inst.subject}</li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
    <div className="content">
      <h3
        className="ui dividing teal header"
        style={{ marginLeft: '10px', marginTop: '15px' }}
        css={headerBackgroundStyle}
      >
        資格・受賞歴
      </h3>
      <div className="content">
        {isEditMode ? (
          <textarea> </textarea>
        ) : (
          <div className="description" style={{ marginLeft: '30px' }}>
            {career.certification.map((inst: Institution) => (
              <ul key={inst.subject} style={{ clear: 'both' }}>
                <li style={{ float: 'left', width: '10%' }}>{inst.period}</li>
                <li style={{ listStyle: 'none' }}>{inst.subject}</li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
)

export default About
