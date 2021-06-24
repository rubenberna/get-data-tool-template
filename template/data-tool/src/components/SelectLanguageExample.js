import React from 'react';
import { useIntl, defineMessages } from 'react-intl';

const MESSAGES = defineMessages({
  success: {
    id: "changeLocale.success",
  },
  error: {
    id: "changeLocale.error",
  }
})

export const SelectLanguageExample = ({handleSelect, addNotification}) => {
  const intl = useIntl()

  const handleChange = ({target: { checked }}) => {
    addNotification(intl.formatMessage(MESSAGES.success), 'success')
    handleSelect(checked ? 'nl' : 'en')
  }

  return (
    <div>
      <label className="switch">
        <input type="checkbox" onChange={handleChange}/>
        <span className="slider round" />
      </label>
    </div>
  )
}
