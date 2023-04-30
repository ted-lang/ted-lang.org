import BlockLink from "./BlockLink";

function BlockLinks() {
  return (
    <div className="mb-32 grid text-center lg:mb-0 md:grid-cols-2 lg:grid-cols-4 lg:text-left">
      <BlockLink
        title="Docs"
        link="https://docs.ted-lang.org"
        description="Find in-depth information about Ted language features."
      />
      <BlockLink
        title="Download"
        link="https://github.com/ted-lang"
        description="Download Ted compiler and other tools for your desktop."
      />
      <BlockLink
        title="Contribute"
        link="https://github.com/ted-lang"
        description="Contribute to Ted Programming Language on GitHub!"
      />
      <BlockLink
        title="Discuss"
        link="https://github.com/orgs/ted-lang/discussions"
        description="Share your valuable ideas about Ted on GitHub Discussions."
      />
    </div>
  );
}

export default BlockLinks;
