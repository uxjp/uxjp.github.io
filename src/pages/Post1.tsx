import './Post.css'

import imageCaveman from './image_caveman.webp'
import CodeBlock from '../components/CodeBlock'

function Post1() {
  return (
    <div className="app-container">
      <div className="post-header">
        <img src={imageCaveman} alt="Caveman illustration" className="post-image" loading="eager" />
        <h2 className="post-title">Post 1: The Reification</h2>
      </div>
      
      <p className='test'>
        Les idées doivent prendre vie. Les fonctionnalités doivent être comprises. Les décisions techniques doivent s'appuyer sur des principes d'ingénierie solides dans leur conception.
        C'est une vérité fondamentale dans le développement logiciel: une idée brillante sans exécution reste une idée. Un code mal pensé, même sophistiqué, crée de la friction. Et la friction ralentit tout.
        Les idées doivent prendre vie. Les fonctionnalités doivent être comprises. Les décisions techniques doivent s'appuyer sur des principes d'ingénierie solides dans leur conception.
        C'est une vérité fondamentale dans le développement logiciel: une idée brillante sans exécution reste une idée. Un code mal pensé, même sophistiqué, crée de la friction. Et la friction ralentit tout.
        Les idées doivent prendre vie. Les fonctionnalités doivent être comprises. Les décisions techniques doivent s'appuyer sur des principes d'ingénierie solides dans leur conception.
        C'est une vérité fondamentale dans le développement logiciel: une idée brillante sans exécution reste une idée. Un code mal pensé, même sophistiqué, crée de la friction. Et la friction ralentit tout.
        Les idées doivent prendre vie. Les fonctionnalités doivent être comprises. Les décisions techniques doivent s'appuyer sur des principes d'ingénierie solides dans leur conception.
        C'est une vérité fondamentale dans le développement logiciel: une idée brillante sans exécution reste une idée. Un code mal pensé, même sophistiqué, crée de la friction. Et la friction ralentit tout.
        Les idées doivent prendre vie. Les fonctionnalités doivent être comprises. Les décisions techniques doivent s'appuyer sur des principes d'ingénierie solides dans leur conception.
        C'est une vérité fondamentale dans le développement logiciel: une idée brillante sans exécution reste une idée. Un code mal pensé, même sophistiqué, crée de la friction. Et la friction ralentit tout.
      </p>
 
      <p>
        "Comment pensez-vous vraiment à ces problèmes?"
      </p>
 
      <p>
        Les utilisateurs de votre logiciel, vos collègues, les développeurs qui maintiendront votre code—ils sont le véritable test de vos décisions. Les principes de conception ne sont pas abstraits. Ils se manifestent dans chaque interaction, chaque ligne de code, chaque choix architectural. Quand vous construisez quelque chose, vous construisez pour eux. Les utilisateurs de votre logiciel, vos collègues, les développeurs qui maintiendront votre code—ils sont le véritable test de vos décisions. Les principes de conception ne sont pas abstraits. Ils se manifestent dans chaque interaction, chaque ligne de code, chaque choix architectural. Quand vous construisez quelque chose, vous construisez pour eux. Les utilisateurs de votre logiciel, vos collègues, les développeurs qui maintiendront votre code—ils sont le véritable test de vos décisions. Les principes de conception ne sont pas abstraits. Ils se manifestent dans chaque interaction, chaque ligne de code, chaque choix architectural. Quand vous construisez quelque chose, vous construisez pour eux. Les utilisateurs de votre logiciel, vos collègues, les développeurs qui maintiendront votre code—ils sont le véritable test de vos décisions. Les principes de conception ne sont pas abstraits. Ils se manifestent dans chaque interaction, chaque ligne de code, chaque choix architectural. Quand vous construisez quelque chose, vous construisez pour eux. Les utilisateurs de votre logiciel, vos collègues, les développeurs qui maintiendront votre code—ils sont le véritable test de vos décisions. Les principes de conception ne sont pas abstraits. Ils se manifestent dans chaque interaction, chaque ligne de code, chaque choix architectural. Quand vous construisez quelque chose, vous construisez pour eux. Les utilisateurs de votre logiciel, vos collègues, les développeurs qui maintiendront votre code—ils sont le véritable test de vos décisions. Les principes de conception ne sont pas abstraits. Ils se manifestent dans chaque interaction, chaque ligne de code, chaque choix architectural. Quand vous construisez quelque chose, vous construisez pour eux. Les utilisateurs de votre logiciel, vos collègues, les développeurs qui maintiendront votre code—ils sont le véritable test de vos décisions. Les principes de conception ne sont pas abstraits. Ils se manifestent dans chaque interaction, chaque ligne de code, chaque choix architectural. Quand vous construisez quelque chose, vous construisez pour eux. Les utilisateurs de votre logiciel, vos collègues, les développeurs qui maintiendront votre code—ils sont le véritable test de vos décisions. Les principes de conception ne sont pas abstraits. Ils se manifestent dans chaque interaction, chaque ligne de code, chaque choix architectural. Quand vous construisez quelque chose, vous construisez pour eux. Les utilisateurs de votre logiciel, vos collègues, les développeurs qui maintiendront votre code—ils sont le véritable test de vos décisions. Les principes de conception ne sont pas abstraits. Ils se manifestent dans chaque interaction, chaque ligne de code, chaque choix architectural. Quand vous construisez quelque chose, vous construisez pour eux. Les utilisateurs de votre logiciel, vos collègues, les développeurs qui maintiendront votre code—ils sont le véritable test de vos décisions. Les principes de conception ne sont pas abstraits. Ils se manifestent dans chaque interaction, chaque ligne de code, chaque choix architectural. Quand vous construisez quelque chose, vous construisez pour eux.
      </p>
 


      <CodeBlock language="java" code={`      import javax.swing.JFrame;
      import org.fife.ui.rsyntaxtextarea.RSyntaxTextArea;
      import org.fife.ui.rtextarea.RTextScrollPane;

      public class SyntaxDemo {
          public static void main(String[] args) {
              JFrame frame = new JFrame("Syntax Highlighter Demo");
              frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

              RSyntaxTextArea textArea = new RSyntaxTextArea();
              textArea.setSyntaxEditingStyle("text/java");
              textArea.setCodeFoldingEnabled(true);

              RTextScrollPane sp = new RTextScrollPane(textArea);
              frame.add(sp);
              frame.setSize(600, 400);
              frame.setVisible(true);
          }`} />

      <p>
        J'ai commencé par développer en C/C++ et OpenGL en infographie, puis je me suis lancé dans le développement full-stack avec Java, Spring, MSSQL et Flutter. Aujourd'hui, je travaille avec React et Spring Boot pour déployer mes propres applications. Chaque technologie m'a enseigné quelque chose sur la façon de penser aux problèmes et aux solutions.
      </p>
    </div>
  );
}


export default Post1;
