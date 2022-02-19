import React from "react";
import "./EditorSection.css";
import editor from "../../assets/Editor.PNG";

const EditorSection = () => {
  return (
    <div className="editor">
      <div className="content">
        <h1>A Word From the Editor</h1>
        <p>
          <img src={editor} className="editor-image" alt="The Editor" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          sollicitudin ex vitae neque faucibus placerat. Donec viverra dui ac
          felis iaculis, luctus rutrum eros maximus. Etiam eget ornare nisi, sed
          vulputate nulla. Donec placerat laoreet blandit. Integer congue nulla
          sed magna egestas sodales. Sed in lorem mi. Integer vel ligula a urna
          tempus interdum ut eu urna. In tellus odio, dignissim ultrices tellus
          eu, condimentum aliquam odio.
          <br />
          <br />
          Quisque sed est sit amet sapien condimentum luctus et vitae sem. Etiam
          vel rutrum felis, a commodo turpis. Ut dui sapien, sollicitudin id
          vulputate ac, facilisis nec ante. Cras lacinia feugiat suscipit. Sed
          in nisi vel sapien rutrum finibus. Mauris id libero aliquam magna
          volutpat egestas at sit amet enim. Nullam ac tellus eget enim rutrum
          rhoncus vitae vel enim. Maecenas nec porttitor est. Duis varius, erat
          eu auctor malesuada, nulla ex sodales nibh, sit amet ultricies metus
          nisl ac ligula. Nullam posuere neque in mollis posuere. Nulla
          consectetur elit eget enim mattis sodales. Aenean ac porta nibh.
          Aliquam porttitor lorem eu malesuada fringilla. Donec malesuada leo
          fermentum turpis dictum ornare ac a purus. Vivamus ex ligula, suscipit
          sed erat sit amet, tempor posuere nisi.
          <br />
          <br />
          Nunc eu fringilla ligula. Vestibulum tempor nulla ut odio ullamcorper,
          id consequat est placerat. Nam pharetra metus ac venenatis imperdiet.
          Nam elit eros, eleifend in tincidunt at, mollis ut sem. Curabitur
          dolor velit, pharetra non enim ut, finibus iaculis turpis. Cras
          lobortis mi mi, vitae venenatis ex malesuada fermentum. Morbi mi
          neque, sodales ut enim at, placerat rhoncus mauris. Aliquam vestibulum
          ut nisi in pretium. Aenean suscipit leo tortor, nec imperdiet libero
          imperdiet at. Donec auctor vel nisi quis tristique. Vivamus lectus
          felis, consequat eu luctus nec, consectetur sit amet nulla.
          Pellentesque purus dui, fermentum id sollicitudin eu, venenatis et
          purus. Praesent dictum semper odio eu pharetra. Nunc risus elit,
          lacinia eu elit ac, vehicula porta lectus. Aliquam erat volutpat. Nunc
          gravida lacus eu felis lobortis, sit amet blandit turpis hendrerit. In
          et maximus purus, at placerat eros. Phasellus non odio sit amet quam
          bibendum dignissim. Phasellus risus sem, mattis sit amet tempus
          rhoncus, dignissim ac tortor. Donec quis velit vitae ante vehicula
          iaculis. Sed nec quam a diam lobortis volutpat in non massa. Aliquam
          vel nisi a turpis sagittis bibendum. Nunc tempus ex sem, vitae porta
          nulla scelerisque at. Nulla eget convallis orci. Quisque sodales, ex
          id rutrum ultrices, turpis lectus mattis sapien, nec tempor urna magna
          at est. In rutrum mauris felis, eget iaculis erat aliquam ut.
        </p>
      </div>
    </div>
  );
};

export default EditorSection;
