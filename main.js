const SocialMediaLinks = {
  github: 'DanielMoscardini',
  youtube: 'channel/UCFUw-iVEav0wZ2QGYC78GwA',
  facebook: 'daniel.moscardini.754',
  instagram: 'moscardinidaniel',
  twitter: 'daniel_mscrdn'
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');

    li.children[0].href = `https://${social}.com/${SocialMediaLinks[social]}`;
  }
}

changeSocialMediaLinks();
