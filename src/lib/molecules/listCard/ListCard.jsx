import React from 'react';
import PropTypes from 'prop-types';

import { listCardMain, listCardRight, listCardLeft } from './ListCard.module.css';

import { useTheme } from '../../theming';
import { IconBadge } from '../../atoms';

function ListCard({ title, text, actionText, actionLink, fillColor, icon, detailColor }) {
  const { primaryFontColor, mainFontFamily } = useTheme();

  const outerStyles = { backgroundColor: fillColor, color: primaryFontColor };
  const titleStyles = { fontFamily: mainFontFamily };

  return (
    <div className={listCardMain} style={outerStyles}>
      {detailColor && (
        <div className={listCardLeft}>
          <IconBadge icon={icon} />
        </div>
      )}
      <div className={listCardRight}>
        <strong style={titleStyles}>{title}</strong>
        {text}
        <a href={actionLink}>{actionText}</a>
      </div>
    </div>
  );
}

ListCard.propTypes = {
  /**
  Título do Card
   */
  title: PropTypes.string,
  text: PropTypes.node.isRequired,
  actionText: PropTypes.string,
  actionLink: PropTypes.string,
  fillColor: PropTypes.string,
  detailColor: PropTypes.string,
  icon: PropTypes.node,
};
ListCard.defaultProps = {
  title: undefined,
  actionText: undefined,
  actionLink: undefined,
  fillColor: 'transparent',
  detailColor: undefined,
  icon: undefined,
};
export default ListCard;
