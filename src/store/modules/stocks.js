import stock from '../../data/stock';

const state = {
	stocks: []
};

const mutations = {
	'SET_STOCKS'(state, stocks){
		state.stocks = stocks;
	},
	'RND_STOCKS'(state) {
		state.stocks.forEach(stock => {
			stock.price = Math.round(stock.price * (0.75 + Math.random() - 0.25) + Math.random() * 10);
		})
	}

};

const actions = {
	buyStock: ({commit}, order) => {
		commit('BUY_STOCK', order);
	},
	initStocks: ({commit}) => {
		commit('SET_STOCKS', stock)
	},
	randomizeStocks: ({commit}) => {
		commit('RND_STOCKS');
	}
};

const getters = {
	stocks: state => {
		return state.stocks;
	}
};

export default {
	state, mutations, actions, getters
}