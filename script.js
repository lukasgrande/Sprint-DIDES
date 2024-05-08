// JavaScript, um den Hintergrund beim Klicken zu ändern
let isVirtualReality = true; // Startzustand des Hintergrunds
let isFirstPage = true; // Variable, um den Zustand der Seite zu verfolgen

document.getElementById("clickArea").addEventListener("click", function() {
    if (isVirtualReality) {
        if (isFirstPage) {
            // Starte die Fade-Out-Animation für Content 1 und 2
            const content1 = document.querySelector('.content1');
            const content2 = document.querySelector('.content2');
            content1.style.animation = "fadeOutLeft 1s forwards"; // Fade-Out nach links für Content 1
            content2.style.animation = "fadeOutRight 1s forwards"; // Fade-Out nach rechts für Content 2

            // Timeout hinzufügen, um den Saugübergang nach Abschluss der Fade-Out-Animationen auszuführen
            setTimeout(() => {
                document.getElementById("landingPage").style.backgroundImage = "none"; // Ändere den Hintergrund auf das Bild der sanjun
                document.querySelector('.background-rotate').style.display = "none"; // Verstecken des drehende Bilds

                // Schaltet die ausgeblendeten Elemente ein oder aus
                document.querySelectorAll('.hide').forEach(function(element) {
                    element.classList.toggle('show');
                });

                // Erstelle das Overlay-Element
                const overlay = document.createElement('div');
                overlay.classList.add('suction-overlay');
                document.getElementById("landingPage").appendChild(overlay);

                // Füge dem Overlay eine Klasse hinzu, um den Saugeffekt auszulösen
                overlay.classList.add('show-overlay');

                // Content-Elemente 3-6 auswählen und Animation starten
                const contentNew1 = document.querySelector('.content-new1');
                const contentNew2 = document.querySelector('.content-new2');
                const contentNew3 = document.querySelector('.content-new3');
                const contentNew4 = document.querySelector('.content-new4');
                const contentNew5 = document.querySelector('.content-new5');
                const content3 = document.querySelector('.content3');
                const content4 = document.querySelector('.content4');
                const content5 = document.querySelector('.content5');
                const content6 = document.querySelector('.content6');
                
                // Timeout hinzufügen, um die Fade-In-Animationen für ContentNew1-2 zu starten
                setTimeout(() => {
                    contentNew1.style.animation = "fadeInLeft 1s forwards";
                    contentNew2.style.animation = "fadeInRight 1s forwards";
                }, 0); // Start der Fade-In-Animation von ContentNew1-2 nach 0.5 Sekunden
               
                setTimeout(() => {
                    contentNew3.style.animation = "fadeRight 3s forwards";
                    contentNew4.style.animation = "fadeLeft 3s forwards";
                    contentNew5.style.animation = "fadeLeft 3s forwards";
                },1500); // Start der Fade-In-Animation von ContentNew3-4 nach 1.5 Sekunden

                // Timeout hinzufügen, um die neuen Content-Divs für 5 Sekunden sichtbar zu lassen
                setTimeout(() => {
                    contentNew1.style.animation = "fadeOutRight 1s forwards";
                    contentNew2.style.animation = "fadeOutLeft 1s forwards";
                    setTimeout(() => {
                        // Einblenden der bestehenden Content-Divs
                        content3.style.animation = "fadeIn 1s forwards";
                        content4.style.animation = "fadeIn 1s forwards";
                        content5.style.animation = "fadeIn 1s forwards";
                        content6.style.animation = "fadeIn 1s forwards";
                    }, 1000);
                }, 4500); // Ausblenden der neuen Content-Divs nach 4.5 Sekunden
            }, 1000); // Start des Saugübergangs nach 1 Sekunde

            isFirstPage = false; // Ändere den Zustand der Seite
        } else {
            
            // Starte die Fade-Out-Animation für Content 3 und 4
            const content3 = document.querySelector('.content3');
            const content4 = document.querySelector('.content4');
            const content5 = document.querySelector('.content5');
            const content6 = document.querySelector('.content6');
            
            setTimeout(() => {
                content3.style.animation = "fadeOut 0.5s forwards";
            }, 500); // Start der Fade-In-Animation von Content 3 nach 0.5 Sekunden

            setTimeout(() => {
                content4.style.animation = "fadeOut 0.5s forwards";
            }, 1000); // Start der Fade-In-Animation von Content 4 nach 1 Sekunde

            setTimeout(() => {
                content5.style.animation = "fadeOut 0.5s forwards";
            }, 1500); // Start der Fade-In-Animation von Content 5 nach 1.5 Sekunden

            setTimeout(() => {
                content6.style.animation = "fadeOut 0.5s forwards";
            }, 2000);

            // Timeout hinzufügen, um zum Anfangszustand der Seite zu navigieren
            setTimeout(() => {
                window.location.reload();
            }, 2500); // Navigieren zum Anfangszustand der Seite nach 2.5 Sekunden
        }
    }
    isVirtualReality = !isVirtualReality; // Ändere Zustand des Hintergrunds
});
