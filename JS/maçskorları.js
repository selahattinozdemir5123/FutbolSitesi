document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.lig-sekme');
    const standingsContainer = document.querySelector('.siralama-tablo tbody');
    const teamSearch = document.getElementById('takimArama');
    const seasonSelect = document.getElementById('sezonSecim');

    const leaguesData = {
        superlig: [
            { rank: 1, team: 'Galatasaray', played: 25, won: 20, draw: 3, lost: 2, goalsFor: 58, goalsAgainst: 20, goalDiff: 38, points: 63 },
            { rank: 2, team: 'Fenerbahçe', played: 25, won: 19, draw: 3, lost: 3, goalsFor: 60, goalsAgainst: 24, goalDiff: 36, points: 60 },
            { rank: 3, team: 'Beşiktaş', played: 25, won: 18, draw: 4, lost: 3, goalsFor: 55, goalsAgainst: 22, goalDiff: 33, points: 58 },
            { rank: 4, team: 'Trabzonspor', played: 25, won: 17, draw: 5, lost: 3, goalsFor: 50, goalsAgainst: 25, goalDiff: 25, points: 56 },
            { rank: 5, team: 'Başakşehir', played: 25, won: 16, draw: 6, lost: 3, goalsFor: 48, goalsAgainst: 26, goalDiff: 22, points: 54 },
            { rank: 6, team: 'Alanyaspor', played: 25, won: 15, draw: 7, lost: 3, goalsFor: 45, goalsAgainst: 28, goalDiff: 17, points: 52 },
            { rank: 7, team: 'Sivasspor', played: 25, won: 14, draw: 8, lost: 3, goalsFor: 43, goalsAgainst: 30, goalDiff: 13, points: 50 },
            { rank: 8, team: 'Hatayspor', played: 25, won: 13, draw: 9, lost: 3, goalsFor: 40, goalsAgainst: 32, goalDiff: 8, points: 48 }
        ],
        premier: [
            { rank: 1, team: 'ManchesterCity', played: 28, won: 21, draw: 5, lost: 2, goalsFor: 60, goalsAgainst: 18, goalDiff: 42, points: 68 },
            { rank: 2, team: 'Liverpool', played: 28, won: 20, draw: 6, lost: 2, goalsFor: 65, goalsAgainst: 20, goalDiff: 45, points: 66 },
            { rank: 3, team: 'Chelsea', played: 28, won: 19, draw: 6, lost: 3, goalsFor: 58, goalsAgainst: 22, goalDiff: 36, points: 63 },
            { rank: 4, team: 'ManchesterUnited', played: 28, won: 18, draw: 7, lost: 3, goalsFor: 55, goalsAgainst: 25, goalDiff: 30, points: 61 },
            { rank: 5, team: 'Arsenal', played: 28, won: 17, draw: 8, lost: 3, goalsFor: 50, goalsAgainst: 28, goalDiff: 22, points: 59 },
            { rank: 6, team: 'Tottenham', played: 28, won: 16, draw: 9, lost: 3, goalsFor: 48, goalsAgainst: 30, goalDiff: 18, points: 57 },
            { rank: 7, team: 'WestHam', played: 28, won: 15, draw: 10, lost: 3, goalsFor: 45, goalsAgainst: 32, goalDiff: 13, points: 55 },
            { rank: 8, team: 'LeicesterCity', played: 28, won: 14, draw: 11, lost: 3, goalsFor: 43, goalsAgainst: 34, goalDiff: 9, points: 53 }
        ],
        laliga: [
            { rank: 1, team: 'RealMadrid', played: 27, won: 20, draw: 5, lost: 2, goalsFor: 60, goalsAgainst: 20, goalDiff: 40, points: 65 },
            { rank: 2, team: 'Barcelona', played: 27, won: 19, draw: 5, lost: 3, goalsFor: 58, goalsAgainst: 22, goalDiff: 36, points: 62 },
            { rank: 3, team: 'AtleticoMadrid', played: 27, won: 18, draw: 6, lost: 3, goalsFor: 55, goalsAgainst: 25, goalDiff: 30, points: 60 },
            { rank: 4, team: 'Sevilla', played: 27, won: 17, draw: 7, lost: 3, goalsFor: 50, goalsAgainst: 28, goalDiff: 22, points: 58 },
            { rank: 5, team: 'RealBetis', played: 27, won: 16, draw: 8, lost: 3, goalsFor: 48, goalsAgainst: 30, goalDiff: 18, points: 56 },
            { rank: 6, team: 'RealSociedad', played: 27, won: 15, draw: 9, lost: 3, goalsFor: 45, goalsAgainst: 32, goalDiff: 13, points: 54 },
            { rank: 7, team: 'Villarreal', played: 27, won: 14, draw: 10, lost: 3, goalsFor: 43, goalsAgainst: 34, goalDiff: 9, points: 52 },
            { rank: 8, team: 'Valencia', played: 27, won: 13, draw: 11, lost: 3, goalsFor: 40, goalsAgainst: 36, goalDiff: 4, points: 50 }
        ],
        bundesliga: [
            { rank: 1, team: 'BayernMunich', played: 26, won: 21, draw: 3, lost: 2, goalsFor: 70, goalsAgainst: 20, goalDiff: 50, points: 66 },
            { rank: 2, team: 'BorussiaDortmund', played: 26, won: 19, draw: 4, lost: 3, goalsFor: 65, goalsAgainst: 25, goalDiff: 40, points: 61 },
            { rank: 3, team: 'RBLeipzig', played: 26, won: 18, draw: 5, lost: 3, goalsFor: 60, goalsAgainst: 28, goalDiff: 32, points: 59 },
            { rank: 4, team: 'BayerLeverkusen', played: 26, won: 17, draw: 6, lost: 3, goalsFor: 55, goalsAgainst: 30, goalDiff: 25, points: 57 },
            { rank: 5, team: 'Wolfsburg', played: 26, won: 16, draw: 7, lost: 3, goalsFor: 50, goalsAgainst: 32, goalDiff: 18, points: 55 },
            { rank: 6, team: 'EintrachtFrankfurt', played: 26, won: 15, draw: 8, lost: 3, goalsFor: 48, goalsAgainst: 34, goalDiff: 14, points: 53 },
            { rank: 7, team: 'BorussiaMönchengladbach', played: 26, won: 14, draw: 9, lost: 3, goalsFor: 45, goalsAgainst: 36, goalDiff: 9, points: 51 },
            { rank: 8, team: 'Freiburg', played: 26, won: 13, draw: 10, lost: 3, goalsFor: 43, goalsAgainst: 38, goalDiff: 5, points: 49 }
        ],
        seriea: [
            { rank: 1, team: 'InterMilan', played: 27, won: 20, draw: 5, lost: 2, goalsFor: 60, goalsAgainst: 20, goalDiff: 40, points: 65 },
            { rank: 2, team: 'ACMilan', played: 27, won: 19, draw: 5, lost: 3, goalsFor: 58, goalsAgainst: 22, goalDiff: 36, points: 62 },
            { rank: 3, team: 'Napoli', played: 27, won: 18, draw: 6, lost: 3, goalsFor: 55, goalsAgainst: 25, goalDiff: 30, points: 60 },
            { rank: 4, team: 'Juventus', played: 27, won: 17, draw: 7, lost: 3, goalsFor: 50, goalsAgainst: 28, goalDiff: 22, points: 58 },
            { rank: 5, team: 'Atalanta', played: 27, won: 16, draw: 8, lost: 3, goalsFor: 48, goalsAgainst: 30, goalDiff: 18, points: 56 },
            { rank: 6, team: 'Roma', played: 27, won: 15, draw: 9, lost: 3, goalsFor: 45, goalsAgainst: 32, goalDiff: 13, points: 54 },
            { rank: 7, team: 'Lazio', played: 27, won: 14, draw: 10, lost: 3, goalsFor: 43, goalsAgainst: 34, goalDiff: 9, points: 52 },
            { rank: 8, team: 'Fiorentina', played: 27, won: 13, draw: 11, lost: 3, goalsFor: 40, goalsAgainst: 36, goalDiff: 4, points: 50 }
        ]
    };

    function updateStandings(league) {
        standingsContainer.innerHTML = '';
        
        const filteredData = leaguesData[league].filter(team => {
            if (teamSearch.value === '') return true;
            return team.team.toLowerCase().includes(teamSearch.value.toLowerCase());
        });
        
        filteredData.forEach(team => {
            const row = document.createElement('tr');
            row.className = `pozisyon-${team.rank <= 4 ? team.rank : ''}`;
            row.innerHTML = `
                <td>${team.rank}</td>
                <td class="takim-bilgi">
                    <img src="resimler/${team.team.toLowerCase().replace(/\s+/g, '-')}-logo.png" alt="${team.team}" class="mini-logo">
                    <span>${team.team}</span>
                </td>
                <td>${team.played}</td>
                <td>${team.won}</td>
                <td>${team.draw}</td>
                <td>${team.lost}</td>
                <td>${team.goalsFor}</td>
                <td>${team.goalsAgainst}</td>
                <td>${team.goalDiff}</td>
                <td><strong>${team.points}</strong></td>
            `;
            standingsContainer.appendChild(row);
        });
        
        updateStats(league);
    }
    
    function updateStats(league) {
        const data = leaguesData[league];
        
        // En çok gol atan takım
        const mostGoals = data.reduce((max, team) => team.goalsFor > max.goalsFor ? team : max, data[0]);
        document.getElementById('enCokGol').textContent = mostGoals.goalsFor;
        document.getElementById('enCokGolTakim').textContent = mostGoals.team;
        
        // En az gol yiyen takım
        const leastConceded = data.reduce((min, team) => team.goalsAgainst < min.goalsAgainst ? team : min, data[0]);
        document.getElementById('enAzYiyenGol').textContent = leastConceded.goalsAgainst;
        document.getElementById('enAzYiyenGolTakim').textContent = leastConceded.team;
        
        // En iyi averaj
        const bestDiff = data.reduce((max, team) => team.goalDiff > max.goalDiff ? team : max, data[0]);
        document.getElementById('enIyiAveraj').textContent = bestDiff.goalDiff;
        document.getElementById('enIyiAverajTakim').textContent = bestDiff.team;
        
        // En çok galibiyet
        const mostWins = data.reduce((max, team) => team.won > max.won ? team : max, data[0]);
        document.getElementById('enCokGalibiyet').textContent = mostWins.won;
        document.getElementById('enCokGalibiyetTakim').textContent = mostWins.team;
    }

    // Tabs event listeners
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('aktif'));
            this.classList.add('aktif');
            const league = this.getAttribute('data-league');
            updateStandings(league);
        });
    });
    
    // Search functionality
    teamSearch.addEventListener('input', function() {
        const activeTab = document.querySelector('.lig-sekme.aktif');
        const league = activeTab.getAttribute('data-league');
        updateStandings(league);
    });
    
    // Season select (placeholder functionality)
    seasonSelect.addEventListener('change', function() {
        const activeTab = document.querySelector('.lig-sekme.aktif');
        const league = activeTab.getAttribute('data-league');
        updateStandings(league);
    });

    // Animation for container
    const containers = document.querySelectorAll('.anaKap');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const observerCallback = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('gorunur');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    containers.forEach(container => {
        observer.observe(container);
    });

   // Initial load
   updateStandings('superlig');
});