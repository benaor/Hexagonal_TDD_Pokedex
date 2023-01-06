# En cours de réalisation 

le dossier /domain correspond au domain (hexagone) 

Il représente le coeur de l'application. On ne trouve aucune librairie externe et il n'a pas connaissance de tout ce qu'on trouve en dehors

- Les /entities sont ... Des entités.  
- Les /gateways sont les ports pour que les classes externe au domaine puisse l'utiliser sans que le domaine n'en ai connaissance (voir le Pattern repository)  
- Les /useCases represente les cas d'utilisations et contiennent des actions que peuvent faire les utilisateur (voir pour peut-être en faire un /service et utiliser des /useCases dans l'infra ?)

