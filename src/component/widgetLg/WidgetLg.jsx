import React from 'react'
import './widgetLg.css'

export const WidgetLg = () => {
  const Button = ({type}) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }
  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest Transactions</h3>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTh'>Customer</th>
          <th className='widgetLgTh'>Date</th>
          <th className='widgetLgTh'>Amount</th>
          <th className='widgetLgTh'>Status</th>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='' className='widgetLgImg'/>
            <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='widgetLgData'>30 Jan 2023</td>
          <td className='widgetLgAmount'>$400.14</td>
          <td className='widgetLgStatus'>
            <Button type='Approved'/>
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='' className='widgetLgImg'/>
            <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='widgetLgData'>30 Jan 2023</td>
          <td className='widgetLgAmount'>$400.14</td>
          <td className='widgetLgStatus'>
            <Button type='Declined'/>
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='' className='widgetLgImg' />
            <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='widgetLgData'>30 Jan 2023</td>
          <td className='widgetLgAmount'>$400.14</td>
          <td className='widgetLgStatus'>
            <Button type='Pending'/>
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='' className='widgetLgImg'/>
            <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='widgetLgData'>30 Jan 2023</td>
          <td className='widgetLgAmount'>$400.14</td>
          <td className='widgetLgStatus'>
            <Button type='Approved'/>
          </td>
        </tr>
      </table>
    </div>
  )
}
