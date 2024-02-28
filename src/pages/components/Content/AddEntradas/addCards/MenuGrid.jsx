import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import {AddSimples} from '../addSimples/addSimples'


// Reusable component for the content blocks
const ContentBlock = ({ imageUrl, altText, title, onClick }) => (
  <div className="flex flex-col grow items-start pt-3 pr-20 pb-9 pl-4 w-full text-xl font-medium leading-6 whitespace-nowrap rounded-lg border border-solid bg-slate-800 text-zinc-50 max-md:pr-5 max-md:mt-6 max-md:max-w-full" onClick={onClick}>
    <img loading="lazy" src={imageUrl} alt={altText} className="aspect-square w-12" />
    <div className="mt-2">{title}</div>
  </div>
);




function MenuGrid({ onComponentClick }) {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const blocksData = [
    { id: 1, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/85a29f7ef80fc38ce99a994e5f3d2a0f8908fdd4ec632b44b3ec3852940c4f14?apiKey=7da105ff23d54111b1bb20395e740f5d&", altText: "Icon for Simples category", title: "Simples" },
    { id: 2, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e39441f684e6d348a75f8c42bf245b8c7d59506bb2068421d76c04501939fcd?apiKey=7da105ff23d54111b1bb20395e740f5d&", altText: "Icon for Multiplas category", title: "Multiplas" },
    { id: 3, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8b82297ced9162df4a0a86b066f0e5c2a9d3bbdea2ba0bec2ea3424f7d083c7?apiKey=7da105ff23d54111b1bb20395e740f5d&", altText: "Icon for Back category", title: "Back" },
    { id: 4, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/841811bac0643df4b44d99b19ba7cf226ea11b000ebd3ba997a4e8486acafe65?apiKey=7da105ff23d54111b1bb20395e740f5d&", altText: "Icon for Lay category", title: "Lay" },
    { id: 5, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7609f4f3a792970a91feb1a6046fdb92b2d6849c261b47b0ef1201a10fd5d940?apiKey=7da105ff23d54111b1bb20395e740f5d&", altText: "Icon for Cash category", title: "Cash" },
    { id: 6, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/8151cf58000c232391c1fb45ff0d1e26816edf0cb6245bca8ea0db6856b4bf24?apiKey=7da105ff23d54111b1bb20395e740f5d&", altText: "Icon for MTT category", title: "MTT" },
  ];

  const handleBlockClick = (id) => {
    // Define here which component should be rendered based on the id or title
    switch (id) {
      case 1:
        setSelectedComponent(<AddSimples/>);
        break;
      case 2:
        setSelectedComponent(<h1>Multiplas Component</h1>);
        break;
      case 3:
        setSelectedComponent(<h1>Back Component</h1>);
        break;
      case 4:
        setSelectedComponent(<h1>Lay Component</h1>);
        break;
      case 5:
        setSelectedComponent(<h1>Cash Component</h1>);
        break;
      case 6:
        setSelectedComponent(<h1>MTT Component</h1>);
        break;
      default:
        setSelectedComponent(null)
    }

    // Notify the parent component about the selected component
    onComponentClick(selectedComponent);
  };

  return (
    <main className="flex flex-col w-full">
      <section className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
        {selectedComponent ? (
          // Render the selected component
          <div>
            <button onClick={() => setSelectedComponent(null)}>
              <ArrowLeft className="text-green-400 hover:text-green-700 mr-4  " size={48} />
            </button>
            {selectedComponent}
          </div>
        ) : (
          // Render the menu if no component is selected
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {blocksData.map((block) => (
              <ContentBlock
                key={block.id}
                imageUrl={block.imageUrl}
                altText={block.altText}
                title={block.title}
                onClick={() => handleBlockClick(block.id)}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default MenuGrid;
