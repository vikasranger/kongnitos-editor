# Front-End Challenge: Text Editor Overview

## Overview
In this challenge, the task is to develop a simple text editor inspired by platforms like Medium.com. The text editor should enable users to create, format, and organize text easily. Creativity in implementation and design is encouraged.

## Core Requirements

### Task 1: Basic Text Editor Features
- Pressing the 'Enter' key should start a new paragraph.
- Allow users to drag and rearrange paragraphs within the document.

### Task 2: Text Formatting
- On double-clicking any word or selection of text, display a tooltip offering three options:
  - Bold: Make the selection bold.
  - Underline: Underline the selection.
  - Color Change: Change the selection color to the color of your choice.

### Task 3: Link Embedding Support
- Users can embed links using a specific tag format. It can follow the markdown link embedding format as follows: `(this is a link)[<http://medium.com/>]`
- When a user finishes editing and clicks “Done,” the editor should convert these tags into clickable text links (like this: This is a link).
- All the embedded links should be displayed outside the editor as a reference list in the same order as they appear in the editor.
  - This list should use two alternate colors of your choice to display the links outside the editor, e.g., Red, Blue, Red, etc.
                                    

## Implementation
- use shift+enter for new line 
- drag paragraph will be push before drop and drop paragraph.
- double click on text for bold , italic and color 
- everything is stored in local storage 


Check out : [TextEditor](https://kongnitos-editor.vercel.app/)
