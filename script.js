// ========== JAVASCRIPT ==========

// Script JavaScript pour ajouter de l'interactivité au site

// ===============================================
// LOGIQUE MENU HAMBURGER RESPONSIVE
// ===============================================
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('main-nav');
    
    // Vérifie que les deux éléments existent (pour éviter des erreurs)
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // 1. Basculer la classe 'is-open' pour l'animation X du bouton
            menuToggle.classList.toggle('is-open');
            
            // 2. Basculer la classe 'is-open' pour afficher/masquer le menu (via CSS)
            navLinks.classList.toggle('is-open');
            
            // 3. Mettre à jour l'attribut ARIA pour l'accessibilité
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }
});

// ===== SMOOTH SCROLL (Défilement fluide) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // querySelectorAll sélectionne TOUS les liens <a> dont l'attribut href commence par "#"
    // [href^="#"] est un sélecteur CSS d'attribut : ^ signifie "commence par"
    // forEach boucle sur chaque lien trouvé
    
    anchor.addEventListener('click', function (e) {
        // addEventListener ajoute un écouteur d'événement "click" sur chaque lien
        // La fonction anonyme se déclenche quand on clique
        
        e.preventDefault();
        // preventDefault() empêche le comportement par défaut du lien (saut instantané vers l'ancre)
        
        const target = document.querySelector(this.getAttribute('href'));
        // Récupère l'élément cible :
        // - this.getAttribute('href') obtient la valeur du href (ex: "#merveilles")
        // - document.querySelector() trouve l'élément avec cet ID
        
        if (target) {
            // Vérifie que la cible existe (sécurité)
            
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // scrollIntoView() fait défiler jusqu'à l'élément
            // behavior: 'smooth' crée une animation fluide au lieu d'un saut brutal
            // block: 'start' aligne le haut de l'élément avec le haut de la fenêtre
        }
    });
});

// ===== BOUTONS DE CATÉGORIES (Filtrage des merveilles) =====
const categoryBtns = document.querySelectorAll('.category-btn');
const merveilleCards = document.querySelectorAll('.merveille-card');

categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // 1. Changer le bouton actif visuellement
        categoryBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // 2. Récupérer la catégorie sélectionnée
        const selectedCategory = this.getAttribute('data-category');
        
        // 3. Filtrer les cartes
        merveilleCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (cardCategory === selectedCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ===== MODAL OU POP UP ARTICLES =====

// Contenu complet des articles
const articles = {
    gizeh: {
        title: "Nouvelle découverte archéologique à Gizeh",
        date: "15 Octobre 2025",
        image: 'url("https://images.unsplash.com/photo-1705628080778-f86b2f90a114?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        content: `
            <h3>Quand le sous-sol dévoile de nouveaux mystères</h3>
            <p>Même après des millénaires, le plateau de Gizeh continue de fasciner. Entre pyramides majestueuses et secrets enfouis sous la pierre, de nouvelles recherches révèlent chaque année des informations inédites sur la vie, le travail et l'ingénierie des anciens Égyptiens.</p>
            <p>Le plateau de Gizeh, célèbre pour les pyramides de Khéops, Khéphren et Mykérinos, continue de surprendre les archéologues. En 2025, des chercheurs ont annoncé avoir détecté, grâce à des radars modernes, des cavités souterraines potentielles sous la pyramide de Khéphren, s'étendant sur plusieurs centaines de mètres.</p>
            <p>Cependant, le Conseil suprême des antiquités égyptiennes a précisé qu'aucune structure n'a encore été archéologiquement confirmée, et que seule une cavité a été repérée à faible profondeur.</p>
            <p>Parallèlement, une étude géochimique menée par le CNRS a mis en évidence une contamination en cuivre et arsenic vieille de plus de 5 000 ans, liée à l'utilisation d'outils lors de la construction, offrant de nouvelles pistes sur les techniques et conditions de travail des bâtisseurs.</p>
            
            <h3>À garder en tête :</h3>
            <p>→ Toutes ces annonces restent non confirmées sur le terrain, et le scepticisme des égyptologues est important.</p>
            <p>→ L'accès aux zones souterraines est limité pour des raisons de sécurité et de conservation, ce qui ralentit les fouilles officielles.</p>
            <p>→ Les technologies modernes, comme les radars de pénétration et les analyses géochimiques, ouvrent de nouvelles pistes pour explorer Gizeh sans toucher aux structures historiques.</p>
            <p>→ Ces découvertes permettent de relier passé et présent, en montrant que même les sites les plus célèbres peuvent encore révéler des secrets après plus de 4 500 ans.</p>
        `
    },
    taj: {
        title: "Restauration du Taj Mahal : un chantier colossal",
        date: "08 Octobre 2025",
        image: 'url("https://images.unsplash.com/photo-1587135941948-670b381f08ce?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        content: `
            <h3>Quand l'éclat du marbre blanc se pense en mètres carrés et en microsillons</h3>
            
            <p>Le monument mythique situé à Agra, en Inde, est aujourd'hui au cœur d'un vaste et coûteux chantier de conservation. Érigé entre 1631 et 1648 par l'empereur moghol Shâh Jahân en mémoire de son épouse Mumtaz Mahal, le Taj Mahal subit les conséquences du temps, de la pollution et des intempéries.</p>

            <h3>Des défis techniques et environnementaux</h3>

            <p>→ En septembre 2024, de fortes pluies ont provoqué des infiltrations d'eau sous le dôme du Taj Mahal : trois points de fuite ont été identifiés par des drones et un scanner LiDAR.</p>
            <p>→ Les minarets et d'autres parties de la structure montrent désormais des signes d'humidité et de détérioration des joints. Des échafaudages ont été installés pour intervenir sans perturber l'accès des visiteurs (le site reste ouvert).</p>
            <p>→ Le marbre blanc, matériau emblématique du mausolée, est menacé : jaunissement, dépôt de particules polluantes, croissance de mousses ou algues. La restauration consiste notamment à appliquer une « boule de pâte à glaise » sur les surfaces pour absorber les impuretés avant rinçage.</p>
            <p>→ Le nombre de visiteurs est un facteur important : jusqu'à 70 000 personnes pouvaient visiter le site sur certaines journées, ce qui crée une pression supplémentaire sur les fondations et les revêtements. Afin de limiter l'afflux, un plafond journalier de 40 000 visiteurs a été annoncé</p>
            
            <h3>Pourquoi un tel chantier ?</h3>
             
            <p>Le Taj Mahal, chef-d'œuvre architectural et site touristique majeur, nécessite une restauration pour préserver son dôme, ses façades et ses jardins pour les générations futures. Le chantier combine techniques traditionnelles et innovations modernes (drones, LiDAR, analyses chimiques) et prend en compte des enjeux plus larges : qualité de l'air, gestion de l'eau et contrôle du tourisme de masse.</p>
        `
    },
    climat: {
        title: "Les merveilles naturelles menacées par le climat",
        date: "01 Octobre 2025",
        image: 'url("https://images.unsplash.com/photo-1601401483380-bbfa54b9ba42?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        content: `
            <h3>Quand la beauté du monde vacille sous l'effet du changement climatique</h3>
           
            <p>Les paysages naturels qui nous émerveillent : montagnes, forêts, glaciers, récifs coralliens ne sont pas éternels. Le réchauffement climatique, la montée des eaux, l'érosion et les phénomènes extrêmes menacent aujourd'hui plusieurs « merveilles naturelles ». Il est temps de regarder ce qui se joue au-delà du spectacle, pour comprendre ce que l'on pourrait perdre.</p>
           
            <h3>Des menaces multiples</h3>
            <p>→ Dans les Alpes françaises, le glacier de la Mer de Glace a perdu près de 1 km de longueur et 160 m d'épaisseur au cours des 35 dernières années, avec une perte de volume estimée à un tiers en vingt ans.</p>
            <p>→ Le Grande Barrière de corail en Australie subit des épisodes de blanchissement à répétition : plus de la moitié de ses coraux auraient disparu depuis 1995 sous l'effet du réchauffement des eaux.</p>
            <p>→ Selon des évaluations, le changement climatique est désormais la menace principale pour les sites du patrimoine naturel mondial : jusqu'à 20 % des sites culturels et naturels africains sont menacés par l'élévation du niveau de la mer et l'érosion côtière.</p>

            <h3>Pourquoi cela devrait nous alerter</h3>
            <p>Ces phénomènes illustrent la fragilité des écosystèmes face à des changements rapides. Quand un glacier fond ou qu'un récif blanchit, c'est tout un milieu naturel qui se transforme, avec des conséquences sur la faune, la flore, le tourisme et l'économie locale. Les communautés humaines qui dépendent de ces sites en subissent également les effets. Perdre une « merveille naturelle », c'est aussi voir disparaître une partie de notre patrimoine commun et de notre capacité à s'émerveiller.</p>
        `
    }
};

// Récupère tous les boutons "Lire la suite"
const openModalBtns = document.querySelectorAll('.open-modal');
const modal = document.getElementById('articleModal');
const closeBtn = document.querySelector('.close');

// Pour chaque bouton "Lire la suite"
openModalBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        // Empêche le comportement par défaut du lien
        
        // Récupère l'article parent
        const card = this.closest('.blog-card');
        const articleId = card.getAttribute('data-article');
        // Récupère l'ID de l'article (gizeh, taj, climat)
        
        // Récupère les données de l'article
        const article = articles[articleId];
        
        if (article) {
            // Remplit la modale avec les données
            document.getElementById('modalTitle').textContent = article.title;
            document.getElementById('modalDate').textContent = article.date;
            document.getElementById('modalContent').innerHTML = article.content;
            document.getElementById('modalHeaderImg').style.backgroundImage = article.image;
            
            // Affiche la modale
            modal.style.display = 'block';
            // Empêche le scroll de la page principale
            document.body.style.overflow = 'hidden';
        }
    });
});

// Ferme la modale quand on clique sur le X
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    // Réactive le scroll
});

// Ferme la modale si on clique en dehors (sur le fond noir)
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
