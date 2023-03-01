import React from 'react';
import { Container } from 'react-bootstrap';
import './NotFoundPage.scss';

import catPic from '../../assets/cat.png';
import { useTranslation } from 'react-i18next';

function NotFoundPage() {
  const [t] = useTranslation();
  return (
    <Container className="not-found-page" data-testid="not-found-page">
      <h2>{t('error.error-page-text')}</h2>
      <img src={catPic} alt="cat" />
    </Container>
  );
}

export default NotFoundPage;
