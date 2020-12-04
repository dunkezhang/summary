import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import * as styles from './RewardCarouesl.vw.less'
import { observer, inject } from 'mobx-react';
import axios from 'm/setup/axios'
import { withRouter } from 'react-router'

@withRouter
@inject('invite_store')
@observer
class RewardCarouesl extends React.Component {
  static propTypes = {
    match: PropTypes.object,
    invite_store: PropTypes.object,
  }
  constructor (props) {
    super(props)
    this.state = {
      rollClass: '',
      list: [],
    }
  }

  componentDidMount () {
    const { params: { inviteCode } } = this.props.match
    const { rewardedRecords } = this.props.invite_store
    this.props.invite_store.getInviteMsg(inviteCode).then((model) => {
      if (model.length > 3) {
        this.startMove(model.length)
        this.setState({ list: [...model, ...model] })
      } else {
        this.setState({ list: model })
      }
    })
  }


  startMove = (len) => {
    const scrollContent = document.querySelector('.scroll-content-reward')
    if (scrollContent) {
      const offsetHeight = scrollContent.offsetHeight;
      const scrollClass = this.setScrollStyle(len * 30, 30);
      this.setState({
        rollClass: scrollClass,
      });
    }
  }

  setScrollStyle = (offsetHeight, speed) => {
    // const uid = Math.random().toString(36).substr(2);
    const uid = 'reword'
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `@-webkit-keyframes rowup${uid} {
        0% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
        100% {
            -webkit-transform: translate3d(0, -51%, 0);
            transform: translate3d(0, -51%, 0);
        }
    }
    @keyframes rowup${uid} {
        0% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
        100% {
            -webkit-transform: translate3d(0, -51%, 0);
            transform: translate3d(0, -51%, 0);
        }
    }
    .rowup-${uid}{
        -webkit-animation: ${Math.floor(offsetHeight * 1000 / speed)}ms rowup${uid} linear infinite normal;
        animation: ${Math.floor(offsetHeight * 1000 / speed)}ms rowup${uid} linear infinite normal;
        -webkit-animation-delay: 1s;//延迟
        animation-delay: 1s;
    }`
    document.getElementsByTagName('head')[0].appendChild(style);
    return `rowup-${uid}`;
  }

  render () {
    const { rollClass, list } = this.state
    const { rewardedRecords } = this.props.invite_store
    if (!rewardedRecords.length) return null
    return (
      <div className={classNames(styles.list)}>
        <div className={'scroll-content-reward ' + rollClass}>
          {
            list.map((item, index) => {
              return (
                <div className={styles.item} key={index}>
                  <div className={styles.leftSection}>
                    {
                      item.avatar
                        ? <img className={styles.avatarImg} src={item.avatar}/>
                        : <div className={styles.avatarNull}>{item.nickname?.substr(0, 1).toUpperCase()}</div>
                    }
                    <div className={styles.userMsg}>
                      <div>{item.nickname?.slice(0, 13)}</div>
                      <div>{item.createTime}</div>
                    </div>
                  </div>
                  <div className={styles.rightSection}>
                    <div>got <span style={{ color: '#D9BD9D' }}>{item.rewardDays}</span> days </div>
                    <div>Free Wholee Prime.</div>
                  </div>
                </div>
              )
            }
            )
          }
        </div>
      </div>
    )
  }
}
export default RewardCarouesl
