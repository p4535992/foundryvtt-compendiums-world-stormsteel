const MODULE_ID = "compendiums-world-stormsteel";

const i18n = (key) => {
  return game.i18n.localize(key);
};
const i18nFormat = (key, data = {}) => {
  return game.i18n.format(key, data);
};

/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */
Hooks.once("init", async () => {
  // log(`${CONSTANTS.MODULE_ID} | Initializing ${CONSTANTS.MODULE_ID}`);
  // Register custom module settings
  //   registerSettings();
  //   initHooks();
  // Preload Handlebars templates
  //await preloadTemplates();
});

/* ------------------------------------ */
/* Setup module							*/
/* ------------------------------------ */
Hooks.once("setup", function () {
  // Do anything after initialization but before ready
  //   setupHooks();
});

/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once("ready", async () => {
  // Do anything once the module is ready
  // if (!game.modules.get('lib-wrapper')?.active && game.user?.isGM) {
  //   let word = 'install and activate';
  //   if (game.modules.get('lib-wrapper')) word = 'activate';
  //   throw error(`Requires the 'libWrapper' module. Please ${word} it.`);
  // }
  // if (!game.modules.get('socketLib')?.active && game.user?.isGM) {
  //   let word = 'install and activate';
  //   if (game.modules.get('socketLib')) word = 'activate';
  //   throw error(`Requires the 'socketLib' module. Please ${word} it.`);
  // }
  //   readyHooks();
  game.modules.get("compendium-themer").api.addModule(MODULE_ID, [
    {
      dataPack: `${MODULE_ID}.stormsteel-scene`,
      colorText: `#ece9df`,
      iconText: ``,
      bannerImage: ``,
      backgroundColorText: `#005EB8`,
    },
    {
      dataPack: `${MODULE_ID}.stormsteel-scene-merchant`,
      colorText: `#ece9df`,
      iconText: ``,
      bannerImage: ``,
      backgroundColorText: `#005EB8`,
    },
    {
      dataPack: `${MODULE_ID}.stormsteel-actor-npchumanoid`,
      colorText: `#ece9df`,
      iconText: ``,
      bannerImage: ``,
      backgroundColorText: `#005EB8`,
    },
    {
      dataPack: `${MODULE_ID}.stormsteel-actor-npchumanoiddrow`,
      colorText: `#ece9df`,
      iconText: ``,
      bannerImage: ``,
      backgroundColorText: `#005EB8`,
    },
    {
      dataPack: `${MODULE_ID}.stormsteel-actor-npchumanoidmix`,
      colorText: `#ece9df`,
      iconText: ``,
      bannerImage: ``,
      backgroundColorText: `#005EB8`,
    },
    {
      dataPack: `${MODULE_ID}.stormsteel-actor-npchumanoidsamurai`,
      colorText: `#ece9df`,
      iconText: ``,
      bannerImage: ``,
      backgroundColorText: `#005EB8`,
    },
    {
      dataPack: `${MODULE_ID}.stormsteel-actor-npcstory`,
      colorText: `#ece9df`,
      iconText: ``,
      bannerImage: ``,
      backgroundColorText: `#005EB8`,
    },
    {
      dataPack: `${MODULE_ID}.stormsteel-actor-player`,
      colorText: `#ece9df`,
      iconText: ``,
      bannerImage: ``,
      backgroundColorText: `#005EB8`,
    },
    {
      dataPack: `${MODULE_ID}.stormsteel-actor-npcmix`,
      colorText: `#ece9df`,
      iconText: ``,
      bannerImage: ``,
      backgroundColorText: `#005EB8`,
    },
    {
      dataPack: `${MODULE_ID}.stormsteel-actor-merchant`,
      colorText: `#ece9df`,
      iconText: ``,
      bannerImage: ``,
      backgroundColorText: `#005EB8`,
    },
    {
      dataPack: `${MODULE_ID}.stormsteel-actor-journal`,
      colorText: `#ece9df`,
      iconText: ``,
      bannerImage: ``,
      backgroundColorText: `#005EB8`,
    },
    {
      dataPack: `${MODULE_ID}.stormsteel-item-merchant`,
      colorText: `#ece9df`,
      iconText: ``,
      bannerImage: ``,
      backgroundColorText: `#005EB8`,
    },
    {
      dataPack: `${MODULE_ID}.stormsteel-item-mix`,
      colorText: `#ece9df`,
      iconText: ``,
      bannerImage: ``,
      backgroundColorText: `#005EB8`,
    },
    {
      dataPack: `${MODULE_ID}.stormsteel-item-hero-and-dragons`,
      colorText: `#ece9df`,
      iconText: ``,
      bannerImage: ``,
      backgroundColorText: `#005EB8`,
    },
    {
      dataPack: `${MODULE_ID}.stormsteel-item-spells-mix`,
      colorText: `#ece9df`,
      iconText: ``,
      bannerImage: ``,
      backgroundColorText: `#005EB8`,
    }
  ]);
});

/* ------------------------------------ */
/* Other Hooks							*/
/* ------------------------------------ */
