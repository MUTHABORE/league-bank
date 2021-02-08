import React from 'react';
import moment from 'moment';

const History = () => {
	return (
		<section className="history">
			<h3 className="history__title">История конвертация</h3>
			<ul className="history__list">
				<li className="history__list-item">
					<p className="history__date">{moment().format(`YYYY-MM-DD`)}</p>
					<div className="history__values">
						<p className="history__value">1000<span className="history__currency"> RUB</span></p>
						<p className="history__value history__value--after">13.14636<span className="history__currency"> USD</span></p>
					</div>
				</li>
			</ul>
			<button className="history__clear">Очистить историю</button>
		</section>
	)
};

export default History;
