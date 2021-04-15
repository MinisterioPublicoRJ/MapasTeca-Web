import React from 'react';
import PropTypes from 'prop-types';

import { listCardMain, listCardRight, listCardLeft } from './ListCard.module.css';

import { useTheme } from '../../theming';
import { IconBadge } from '../../atoms';

/**
 * Um card genérico para listas, utiliza o átomo `IconBadge`para os detalhes do lado esquerdo.
 Apenas o conteúdo é necessário, e você pode usar qualquer combinação de outras props.
 Sempre ocupa toda a largura disponível no pai, e cresce sua altura para que todos os filhos caibam.
 Não renderiza o detalhe caos não receba uma cor para ele (`detailColor`). Veja `IconBadge` para mais
 informações sobre a aba de detalhe.
 */
function ListCard({ title, content, actionText, actionLink, fillColor, icon, detailColor }) {
  const { primaryFontColor, mainFontFamily, smallFontSize, primaryLinkColor } = useTheme();

  const lineHeight = `calc( 1.3 * ${smallFontSize})`;
  const outerStyles = {
    backgroundColor: fillColor,
    color: primaryFontColor,
    fontFamily: mainFontFamily,
    fontSize: smallFontSize,
    lineHeight,
  };

  const charedSectionStyles = {
    padding: lineHeight,
  };

  const titleStyles = {
    paddingBottom: `calc( 0.5 * ${smallFontSize})`,
  };

  const linkStyles = {
    color: primaryLinkColor,
    fontSize: smallFontSize,
    paddingTop: `calc( 0.5 * ${smallFontSize})`,
  };

  return (
    <div className={listCardMain} style={outerStyles}>
      {detailColor && (
        <div className={listCardLeft}>
          <IconBadge backgroundColor={detailColor} icon={icon} />
        </div>
      )}
      <div className={listCardRight} style={charedSectionStyles}>
        <strong style={titleStyles}>{title}</strong>
        {content}
        <a style={linkStyles} href={actionLink}>
          {actionText}
        </a>
      </div>
    </div>
  );
}

ListCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node.isRequired,
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
