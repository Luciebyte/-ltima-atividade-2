// Dados para o gráfico de pessoas que gostam de filmes de romance globalmente
const dataGlobal = [
    {
        x: ['Comédia Romântica', 'Drama Romântico', 'Romance de Época'],
        y: [50, 30, 20], // Percentagens globais
        type: 'bar',
        marker: {
            color: ['#ff80bf', '#ff4d94', '#f50057']
        }
    }
];

const layoutGlobal = {
    title: {
        text: 'Preferências de Filmes de Romance Globais (2024)',
        font: { family: 'Russo One', size: 24 }
    },
    xaxis: {
        title: 'Categorias de Filmes',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    yaxis: {
        title: 'Percentagem (%)',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    plot_bgcolor: '#f8f9fa',
    paper_bgcolor: '#f8f9fa'
};

// Exibe o gráfico na seção com id 'grafico'
Plotly.newPlot('grafico', dataGlobal, layoutGlobal);

// Dados para o gráfico de pessoas que gostam de filmes de romance no Colégio Morelli
const dataMorelli = [
    {
        x: ['Comédia Romântica', 'Drama Romântico', 'Romance de Época'],
        y: [60, 25, 15], // Percentagens específicas do Colégio Morelli
        type: 'bar',
        marker: {
            color: ['#ff80bf', '#ff4d94', '#f50057']
        }
    }
];

const layoutMorelli = {
    title: {
        text: 'Preferências de Filmes de Romance no Colégio Morelli (2024)',
        font: { family: 'Russo One', size: 24 }
    },
    xaxis: {
        title: 'Categorias de Filmes',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    yaxis: {
        title: 'Percentagem (%)',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    plot_bgcolor: '#f8f9fa',
    paper_bgcolor: '#f8f9fa'
};

// Exibe o gráfico na seção com id 'grafico-morelli'
Plotly.newPlot('grafico-morelli', dataMorelli, layoutMorelli);

