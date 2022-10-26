import React, { useEffect, useState } from 'react'
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { MdCancel } from 'react-icons/md'
import Image from 'next/image'

import { filterData, getFilterValues } from '../../utils/filterData'

function SearchFilters() {

    const [filters, setFilters] = useState(filterData);

    const searchProperties = (filterValues) => {

    }

    return (
        <Flex background='gray.100' p='4' flexWrap='wrap' justifyContent='center'>
            {filters.map((filter) => (
                <Box key={filter.queryName}>
                    <Select
                        onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}
                        placeholder={filter.placeholder}
                        w='fit-content' p='2'>

                        {filter?.items?.map((item => (
                            <option value={item.value} key={item.value}>
                                {item.name}
                            </option>
                        )))}
                    </Select>
                </Box>
            ))}
        </Flex>
    )
}

export default SearchFilters