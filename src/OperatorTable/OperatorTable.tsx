/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  FormControlLabel,
  Checkbox,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import TopBarProgress from "react-topbar-progress-indicator";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DataTable from "react-data-table-component-with-filter";
import { fetchData } from "../utils";
import columns from "./columns";
import "./columns.css";
import { Character } from "../types";

interface Column {
  name: string;
}

const urls = {
  en: "https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/en_US/gamedata/excel/character_table.json",
  jp: "https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/ja_JP/gamedata/excel/character_table.json",
  cn: "https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/zh_CN/gamedata/excel/character_table.json",
  kr: "https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/ko_KR/gamedata/excel/character_table.json",
};

const defaultColumns = columns.filter(column => {
  return column.default;
});

const OperatorTable = () => {
  const [loading, setLoading] = useState(true);
  const [characterData, setCharacterData] = useState<Character[]>([]);
  const [selectedColumns, setSelectedColumns] = useState<Column[]>(
    defaultColumns as []
  );
  const [selectedDataset, setSelectedDataset] = useState<
    "en" | "jp" | "cn" | "kr"
  >("en");

  const sortedColumns = columns.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  /*
  useEffect(() => {
    const fetcher = async () => {
      setCharacterData(await fetchData(urls[selectedDataset]));
      setLoading(false);
    };
    fetcher();
  }, []);
  */

  useEffect(() => {
    setLoading(false);
  }, [characterData]);

  useEffect(() => {
    setLoading(true);
    const fetcher = async () => {
      setCharacterData(await fetchData(urls[selectedDataset]));
    };
    fetcher();
  }, [selectedDataset]);

  return (
    <div>
      {loading === true && <TopBarProgress />}
      <FormControl fullWidth>
        <InputLabel>Server</InputLabel>
        <Select
          value={selectedDataset}
          label="Server"
          onChange={e => {
            setSelectedDataset(e.target.value as "en" | "jp" | "cn" | "kr");
          }}
        >
          <MenuItem value="en">EN</MenuItem>
          <MenuItem value="jp">JP</MenuItem>
          <MenuItem value="kr">KR</MenuItem>
          <MenuItem value="cn">CN</MenuItem>
        </Select>
      </FormControl>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Selected Parameters
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            {columns.map((column: Column) => {
              return (
                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={
                          selectedColumns.find((col: Column) => {
                            return col.name === column.name;
                          }) !== undefined
                        }
                      />
                    }
                    label={column.name}
                    onChange={(e, v) => {
                      if (v === true) {
                        setSelectedColumns([...selectedColumns, column]);
                      } else {
                        setSelectedColumns(
                          selectedColumns.filter(selectedColumn => {
                            return selectedColumn.name !== column.name;
                          })
                        );
                      }
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </AccordionDetails>
      </Accordion>
      {characterData.length > 0 && (
        <DataTable
          className="custom-datatable-container"
          title="Operators"
          columns={selectedColumns}
          data={characterData}
          theme="dark"
          pagination
          paginationPerPage={25}
          paginationRowsPerPageOptions={[25, 50, 75, 100]}
        />
      )}
    </div>
  );
};

export default OperatorTable;
