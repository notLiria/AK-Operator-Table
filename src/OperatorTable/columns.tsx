import { Character } from "../types";

const columns = [
  {
    sortable: true,
    filterable: true,
    reorder: true,
    default: true,
    width: "200px",
    name: "Operator name",
    selector: (row: Character) => {
      if (row.name !== "") {
        return row.name;
      }
      return "N/A";
    },
  },
  {
    sortable: true,
    filterable: true,
    reorder: true,
    default: true,
    width: "200px",
    name: "Faction",
    selector: (row: Character) => {
      return row.nationId || "N/A";
    },
  },
  {
    sortable: true,
    filterable: true,
    reorder: true,
    width: "100px",
    name: "Position",
    selector: (row: Character) => {
      return row.position;
    },
  },
  {
    sortable: true,
    filterable: true,
    reorder: true,
    default: true,
    width: "150px",
    name: "Class",
    selector: (row: Character) => {
      return row.profession;
    },
  },
  {
    sortable: true,
    filterable: true,
    reorder: true,
    default: true,
    width: "150px",
    name: "Subclass",
    selector: (row: Character) => {
      return row.subProfessionId;
    },
  },
  {
    sortable: true,
    filterable: true,
    reorder: true,
    default: true,
    width: "100px",
    name: "Rarity",
    selector: (row: Character) => {
      return row.rarity;
    },
  },
  {
    sortable: true,
    filterable: true,
    reorder: true,
    width: "125px",
    name: "Block Count (E0)",
    selector: (row: Character) => {
      return row.phases[0].attributesKeyFrames[0].data.blockCnt;
    },
  },
  {
    sortable: true,
    filterable: true,
    reorder: true,
    width: "125px",
    promotion: 1,
    name: "Block Count (E1)",
    selector: (row: Character) => {
      if (row.phases.length > 1) {
        return row.phases[1].attributesKeyFrames[0].data.blockCnt;
      }
      return row.phases[0].attributesKeyFrames[0].data.blockCnt;
    },
  },
  {
    sortable: true,
    filterable: true,
    reorder: true,
    width: "125px",
    promotion: 2,
    name: "Block Count (E2)",
    selector: (row: Character) => {
      if (row.phases.length > 2) {
        return row.phases[2].attributesKeyFrames[0].data.blockCnt;
      }
      return row.phases[0].attributesKeyFrames[0].data.blockCnt;
    },
  },
  {
    sortable: true,
    filterable: true,
    reorder: true,
    width: "125px",
    name: "Base Attack Time",
    selector: (row: Character) => {
      return row.phases[0].attributesKeyFrames[0].data.baseAttackTime;
    },
  },
  {
    sortable: true,
    filterable: true,
    reorder: true,
    width: "125px",
    name: "Redeploy Time",
    selector: (row: Character) => {
      return row.phases[0].attributesKeyFrames[0].data.respawnTime;
    },
  },
  {
    sortable: true,
    filterable: true,
    reorder: true,
    default: true,
    width: "75px",
    name: "E0 DP",
    selector: (row: Character) => {
      return row.phases[0].attributesKeyFrames[0].data.cost;
    },
  },
  {
    sortable: true,
    filterable: true,
    reorder: true,
    default: true,
    width: "75px",
    promotion: 1,
    name: "E1 DP",
    selector: (row: Character) => {
      if (row.phases.length > 1) {
        return row.phases[1].attributesKeyFrames[0].data.cost;
      }
      return "N/A";
    },
  },
  {
    sortable: true,
    filterable: true,
    reorder: true,
    default: true,
    width: "75px",
    promotion: 2,
    name: "E2 DP",
    selector: (row: Character) => {
      if (row.phases.length > 2) {
        return row.phases[2].attributesKeyFrames[0].data.cost;
      }
      return "N/A";
    },
  },
  {
    sortable: true,
    filterable: true,
    reorder: true,
    width: "75px",
    name: "Pot 2 DP Change",
    selector: (row: Character) => {
      if (
        row.potentialRanks.length > 0 &&
        row.potentialRanks[0].buff?.attributes.attributeModifiers[0]
          .attributeType === 4
      ) {
        return row.potentialRanks[0].buff.attributes.attributeModifiers[0]
          .value;
      }

      return 0;
    },
  },
  {
    sortable: true,
    filterable: true,
    reorder: true,
    width: "75px",
    name: "Pot 3 DP Change",
    selector: (row: Character) => {
      if (
        row.potentialRanks.length > 2 &&
        row.potentialRanks[1].buff?.attributes.attributeModifiers[0]
          .attributeType === 4
      ) {
        return row.potentialRanks[1].buff.attributes.attributeModifiers[0]
          .value;
      }

      return 0;
    },
  },
  {
    sortable: true,
    filterable: true,
    reorder: true,
    width: "75px",
    name: "Pot 4 DP Change",
    selector: (row: Character) => {
      if (
        row.potentialRanks.length > 3 &&
        row.potentialRanks[2].buff?.attributes.attributeModifiers[0]
          .attributeType === 4
      ) {
        return row.potentialRanks[2].buff.attributes.attributeModifiers[0]
          .value;
      }

      return 0;
    },
  },
  {
    sortable: true,
    filterable: true,
    reorder: true,
    width: "75px",
    name: "Pot 5 DP Change",
    selector: (row: Character) => {
      if (
        row.potentialRanks.length > 4 &&
        row.potentialRanks[4].buff?.attributes.attributeModifiers[0]
          .attributeType === 4
      ) {
        return row.potentialRanks[4].buff.attributes.attributeModifiers[0]
          .value;
      }
      return 0;
    },
  },
  {
    sortable: true,
    filterable: true,
    reorder: true,
    width: "75px",
    name: "Pot 6 DP Change",
    selector: (row: Character) => {
      if (
        row.potentialRanks.length > 5 &&
        row.potentialRanks[5].buff?.attributes.attributeModifiers[0]
          .attributeType === 4
      ) {
        return row.potentialRanks[5].buff.attributes.attributeModifiers[0]
          .value;
      }
      return 0;
    },
  },
];

export default columns;
